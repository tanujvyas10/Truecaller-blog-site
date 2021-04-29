const express = require("express");
const axios = require('axios')
const app = express();
const SITE_ID = 107403796;
app.use(express.json({
    limit: '50mb'
}))
app.use(express.urlencoded({
    extended: true,
    limit: '50mb'
}))



app.get("/allPosts", (req, res) => {
    axios.get(`https://public-api.wordpress.com/rest/v1.1/sites/${SITE_ID}/posts`).then(resp => {

            res.json({
                resp: resp.data.posts
            })
        })
        .catch(function(error) {
            
            res.json({
                message: 'SOMETHING IS NOT RIGHT. PLEASE REFRESH'
            })
        });



})

app.get("/getAllCategories", (req, res) => {
    axios.get(`https://public-api.wordpress.com/rest/v1.1/sites/${SITE_ID}/categories`).then((resp)=>{

            res.json({
                resp: resp.data
            })
        })
        .catch(function(error) {
            
            res.json({
                message: 'SOMETHING IS NOT RIGHT. PLEASE REFRESH'
            })
        });



})

app.get("/getAllTags", (req, res) => {
    axios.get(`https://public-api.wordpress.com/rest/v1.1/sites/${SITE_ID}/tags`).then((resp)=>{

            res.json({
                resp: resp.data
            })
        })
        .catch(function(error) {
          
            res.json({
                message: 'SOMETHING IS NOT RIGHT. PLEASE REFRESH'
            })
        });



})

app.get("/getPostById/:id", (req, res) => {

    const {
        id
    } = req.params
    axios.get(`https://public-api.wordpress.com/rest/v1.1/sites/${SITE_ID}/posts/${id}`).then((resp) => {
            res.json({
                resp: resp.data
            })
        })
        .catch(function(error) {
           
            res.json({
                message: 'SOMETHING IS NOT RIGHT. PLEASE REFRESH'
            })
        });



})


app.get("/post/getRelated/:id", (req, res) => {
    const {
        id
    } = req.params
    let data = '[\n    {\n        "product_name":"asdfasdf",\n        "product_quantity":342,\n        "product_category":"detergent",\n        "product_status":"ok"\n    },\n    {\n        "product_name":"asdfasdf",\n        "product_quantity":342,\n        "product_category":"detergent",\n        "product_status":"ok"\n    },\n    {\n        "product_name":"asdfasdf",\n        "product_quantity":342,\n        "product_category":"detergent",\n        "product_status":"ok"\n    }\n]';

    let config = {
        method: 'post',
        url: `https://public-api.wordpress.com/rest/v1/sites/107403796/posts/${id}/related`,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Accept': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function(response) {
            res.json({
                result: response.data
            })
        })
        .catch(function(error) {
            res.json({
                message: 'NO REALATED POST FOUND'
            })
        });

});

app.listen(8080, function() {
    console.log("server...")
});