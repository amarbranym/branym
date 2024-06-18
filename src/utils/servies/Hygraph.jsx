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
    query getWorks {
      works {
        id
        slug
        title
        color {
          css
          hex
        }
        logo {
          url
          id
        }
        client
        category
        description
        coverImage {
          url
          id
        }
        services
      }
      works {
        id
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
