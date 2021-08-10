const Comment = require("./models/commentModel");

const viewComment = async (req, res) => {
  const allComments = await Comment.findOne({});
  try {
    res.json(allComments);
  } catch (err) {
    res.status(500).json({ err });
  }
};

const postComment = async (req, res) => {
  const newComment = new Comment(req.body);
  try {
    const comment = await newComment.save();
    res.json(comment);
  } catch (err) {
    res.status(500).json({ err });
    console.log(err);
  }
};

module.exports = {viewComment, postComment}