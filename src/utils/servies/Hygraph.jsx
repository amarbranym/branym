import { gql, request } from 'graphql-request'
const MASTER_URL =
  'https://api-ap-south-1.hygraph.com/v2/clvp6pstc0rmb08uw28eo6rgq/master'

export const getClientList = async () => {
  const query = gql`
    query ClientList {
      clients {
        designation
        companyName
        logo {
          id
          url
        }
        ownerName
        review
      }
    }
  `
  const result = await request(MASTER_URL, query)
  return result
}
export const getWorkList = async () => {
  const query = gql`
    query WorkList {
      works {
        client
        createdAt
        description

        id
        slug
        summary
        title
        updatedAt
        services
        featured
        link
        thumbnail {
          id
          url
        }
        coverImage {
          url
          id
        }
        clientImage {
          id
          url
        }
        month
        year
      }
    }
  `
  const result = await request(MASTER_URL, query)
  return result
}
export const getWork = async (slug) => {
  const query =
    gql`
    query Works {
      works(where: { slug: "` +
    slug +
    `" }) {
        client
        createdAt
        description
        id
        publishedAt
        markdata
        summary
        title
        updatedAt
        services
        featured
        link
        thumbnail {
          id
          url
        }
        coverImage {
          url
          id
        }
        clientImage {
          id
          url
        }
        related {
          client
          featured
          slug
          title
          summary
          year
          month
          id
          description
        }
        month
        year
      }
    }
  `
  const result = await request(MASTER_URL, query)
  return result
}
export const getBlogList = async (slug) => {
  const query = gql`
    query blogList {
      blog {
        description
        slug
        date
        image {
          id
          url
        }
        markData
        author {
          designation
          name
          avatar {
            id
            url
          }
        }
      }
    }
  `
  const result = await request(MASTER_URL, query)
  return result
}
export const getBlog = async (slug) => {
  const query =
    gql`
  query Blog {
    blog(where: {slug: "` +
    slug +
    `"}) {
      author {
        id
        name
        designation
        avatar {
          id
          url
        }
      }
      description
      date
      markData
      title
    }
  }
  
  `
  const result = await request(MASTER_URL, query)
  return result
}
export const getTeam = async () => {
  const query = gql`
    query Team {
      teams {
        name
        id
        description
        designation
        picture {
          id
          url
        }
        social {
          link
          platform
        }
      }
    }
  `
  const result = await request(MASTER_URL, query)
  return result
}
