const { StatusCodes } = require("http-status-codes");
const { getAllCategories, createCategories, getOneCategories, updateCategories, deleteCategories } = require("../../../services/mongoose/categories");

const create = async (req, res, next) => {
  try {
    // const { name } = req.body;
    // const result = await Categories.create({ name });

    const result = await createCategories(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const index = async (req, res, next) => {
  try {
    // const result = await Categories.find();
    const result = await getAllCategories(req);
    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const find = async (req, res, next) => {
  try {
    // const { id } = req.params;

    // const result = await Categories.findOne({ _id: id });
    const result = await getOneCategories(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    // const { id } = req.params;
    // const { name } = req.body;

    // another example from mongoose docs
    // const result = await Categories.findByIdAndUpdate(
    //   {
    //     _id: id,
    //   },
    //   { name },
    //   { new: true, runValidators: true }
    // );

    // const result = await Categories.findById(id);
    const result = await updateCategories(req);

    // handling error in controller
    // if (!result) {
    //   return res.status(404).json({ message: "Id categories tidak ditemukan" });
    // }

    // result.name = name;
    // await result.save();

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    // const { id } = req.params;

    // const result = await Categories.findByIdAndRemove({ _id: id });
    const result = await deleteCategories(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  index,
  find,
  update,
  create,
  destroy,
};
