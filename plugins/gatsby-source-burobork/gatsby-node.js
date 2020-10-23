// Lightweight GraphQL generic client
const GraphQLClient = require('graphql-request').GraphQLClient;
const crypto = require('crypto');


// sourceNodes is a Gatsby API
module.exports.sourceNodes = async ({ actions }, configOptions) => {
  // console.log('Testing my plugin', configOptions);
  const site = configOptions.key;

  //GraphQL query string to get all inventory, filtering by a specific dealer
  const pages = `
{
	Site(id: "${site}") {
        pages {
            title
            slug
            locale
            seo_title
            meta_description
            page_rows {
              options
              page_blocks {
                  options
              }
            }
            page_blocks {
                options
            }
        }
  }
}
`;

  const items = `
{
  Site(id: "${site}") {
    groups {
      group_items {
        name
        items {
          id
          import_id
          title
          url
          fields
        }
      }
    }
  }
}
`;

  const menus = `
{
  Site(id: "${site}") {
    menus {
      name
      locale
      menu_items {
        id
        options
        title
        url
        parent
      }
    }
    settings {
      key
      value
    }
    site_settings
  }
}
`;

  const { createNode } = actions;
  const client = new GraphQLClient('https://cms.burobork.nl/graphql');
  const data = await client.request(pages);
  const data_items = await client.request(items);
  const data_menus = await client.request(menus);

  // Passes inventory array of objects to createNodes function
  // a node is created for each vehicle
  createNodes(createNode, data.Site.pages);
  createSettingNodes(createNode, data_menus.Site.site_settings);
  createMenuNodes(createNode, data_menus.Site.menus);
  const groups = data_items.Site.groups;
  groups.forEach(group => {
    group.group_items.forEach(gi => {
      createItemNodes(createNode, gi.items, gi);
    });
  });
};

function createNodes(fn, nodes) {
  nodes.forEach(node => {
    const jsonNode = JSON.stringify(node);
    fn({
      id: node.title + node.slug,
      parent: null,
      slug: node.slug,
      locale: node.locale,
      field: jsonNode, // pass queried data into node
      children: [],
      internal: {
        type: 'BuroBorkPage',
        content: jsonNode,
        contentDigest: crypto
          .createHash(`md5`)
          .update(jsonNode)
          .digest(`hex`),
      },
    });
  });
}

function createSettingNodes(fn, node) {
  const jsonNode = JSON.stringify(node);
  fn({
    id: node.title,
    parent: null,
    field: jsonNode, // pass queried data into node
    children: [],
    internal: {
      type: 'BuroBorkSite',
      content: jsonNode,
      contentDigest: crypto
        .createHash(`md5`)
        .update(jsonNode)
        .digest(`hex`),
    },
  });
}

function createItemNodes(fn, nodes, group) {
  nodes.forEach(node => {
    const jsonNode = JSON.stringify(node);

    fn({
      id: node.id,
      parent: null,
      slug: node.slug,
      title: node.title,
      group: group.name,
      field: jsonNode, // pass queried data into node
      children: [],
      internal: {
        type: 'Items',
        content: jsonNode,
        contentDigest: crypto
          .createHash(`md5`)
          .update(jsonNode)
          .digest(`hex`),
      },
    });
  });
}

function createMenuNodes(fn, nodes) {
  nodes.forEach(node => {
    const jsonNode = JSON.stringify(node);
    fn({
      id: node.name + '-' + node.locale,
      parent: null,
      name: node.name,
      locale: node.locale,
      field: jsonNode, // pass queried data into node
      children: [],
      parent_item: node.parent,
      internal: {
        type: 'BuroBorkMenu',
        content: jsonNode,
        contentDigest: crypto
          .createHash(`md5`)
          .update(jsonNode)
          .digest(`hex`),
      },
    });
  });
}
