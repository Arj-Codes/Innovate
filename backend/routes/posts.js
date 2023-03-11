const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const { createError } = require("../error.js");
const { verifyToken } = require("../verifytoken");

router.post("/", async (req, res, next) => {
  try {
    const np = new Post({
      user: req.body.userId,
      title: req.body.title,
      content: req.body.content,
      img: req.body.img,
      tags: req.body.tags,
    });
    await np.save();

    await User.findByIdAndUpdate(req.body.userId, {
      $push: {
        posts: np._id,
      },
    });
    res.status(200).json("New Post Created!");
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    await Post.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json("Updated successfully!");
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  //remove duplicates
  try {
    const tags = req.body.tags;
    var posts = [];

    async function getPosts(tag, index) {
      let p = await Post.findOne({
        tags: {
          $in: tag,
        },
      });
      if(p!=null)posts.push(p);
    }
    await Promise.all(tags.map(getPosts));

    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const p = await Post.findById(req.params.id);
    res.status(200).json(p);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const p = await Post.findById(req.params.id);
    const comments = p.comments;

    await comments.map(async (comment) => {
      await Comment.findByIdAndDelete(comment._id);
    });

    await User.findByIdAndUpdate(
      p.user,
      { $pull: { posts: p._id } },
      false, // Upsert
      true // Multi
    );
    await p.deleteOne();
    res.status(200).json("Post Deleted");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
