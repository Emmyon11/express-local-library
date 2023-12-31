const Author = require("../models/author")
const asyncHandler = require("express-async-handler")

//Display names of all Authors.
exports.author_list = asyncHandler(async (req, res, next)=>{
    res.send("NOT IMPLLEMENTED: Author details list")
})

//Display detail page for specific authors.
exports.author_detail = asyncHandler(async (res, req, next)=>{
    res.send(`NOT IMPLEMENTED: Author detail: ${req.param.id} `)
})

//Display Author create from on GET
exports.author_create_get = asyncHandler(async (req, res, next)=>{
    res.send("NOT IMPLEMENTED: Author create GET")
})

//Handle Author create POST
exports.author_create_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author create POST");
});

// Display Author delete form on GET.
exports.author_delete_get = asyncHandler(async (req, res, next) => {
res.send("NOT IMPLEMENTED: Author delete GET");
});

// Handle Author delete on POST.
exports.author_delete_post = asyncHandler(async (req, res, next) => {
res.send("NOT IMPLEMENTED: Author delete POST");
});

// Display Author update form on GET.
exports.author_update_get = asyncHandler(async (req, res, next) => {
res.send("NOT IMPLEMENTED: Author update GET");
});

// Handle Author update on POST.
exports.author_update_post = asyncHandler(async (req, res, next) => {
res.send("NOT IMPLEMENTED: Author update POST");
});