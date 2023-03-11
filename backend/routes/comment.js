const router = require("express").Router();
const Comment = require("../models/Comment");
const Post = require("../models/Post");
const { verifyToken } = require("../verifytoken");

router.post("/:id", async (req, res, next) => {
  try {
    const c = new Comment({
      post: req.params.id,
      ...req.body,
    });
    await c.save();

    await Post.findByIdAndUpdate(req.params.id, {
      $push: {
        comments: c._id,
      },
    });
    res.status(200).json("Comment Posted!");
  } catch (error) {
    next(error);
  }
});

//like
router.put("/like/:id", async (req, res, next) => {
  try {
    await Comment.findByIdAndUpdate(req.params.id, {
      $inc: {
        likes: 1,
      },
    });
    res.status(200).json("Comment Liked!");
  } catch (error) {
    next(error);
  }
});

//dislike
router.put("/dislike/:id", async (req, res, next) => {
  try {
    await Comment.findByIdAndUpdate(req.params.id, {
      $inc: {
        dislikes: 1,
      },
    });
    res.status(200).json("Comment Disliked!");
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    const comments = post.comments;
    var c = [];

    async function getComments(id, index) {
      let cc = await Comment.findById(id);
      c.push(cc);
    }
    await Promise.all(comments.map(getComments));

    res.status(200).json(c);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const p = await Comment.findById(req.params.id);
    await Post.findByIdAndUpdate(
      p.postId,
      { $pull: { comments: p._id } },
      false, // Upsert
      true // Multi
    );
    await p.deleteOne();
    res.status(200).json("Deleted Comment!");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
