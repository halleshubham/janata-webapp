import wp_config from "../config";

var baseUrl = "https://janataweekly.org/wp-json/wp/v2/";

var graphql = wp_config().website+"/graphql"

export function getCategories(){
    return fetch(baseUrl+"categories?per_page=30")
      .then((data)=>data.json())
      .then((data)=>{
       return data;
      })
      .catch((e)=>{
        console.error("Error occured while fetching categories from website: "+e);
      })
}

export function getPosts(iso8601Date){ // 2022-08-20T00:00:00
    return fetch(baseUrl+"posts?per_page=40&categories=669&after="+iso8601Date+"T00:00:00")
      .then((data)=>data.json())
      .then((data)=>{
       return data;
      })
      .catch((e)=>{
        console.error("Error occured while fetching categories from website: "+e);
      })
}

export function getGraphqlPosts(iso8601Date){
  var GRAPHQL_POSTS = `{
    generalSettings {
      title
      url
      description
    },
    posts(after: "`+iso8601Date+`T00:00:00") {
      nodes {
        author {
          node {
            name
          }
        }
        content(format: RENDERED)
        excerpt(format: RENDERED)
        title(format: RENDERED)
        featuredImage {
          node {
            sourceUrl
            mediaDetails {
              sizes {
                sourceUrl
                name
              }
            }
          }
        }
        postId
        link
        date
      }
    }
  }`

  return fetch(graphql, {
    method:"POST",
    headers:{ "Content-Type":'application/json' },
    body : JSON.stringify({query:GRAPHQL_POSTS})
  }).then(res=>res.json())
  .then ((res)=> res.data)
  .catch((err)=>console.error("Error querying GraphQL: "+err))
}