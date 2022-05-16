const Travel = require("../model/Travel");

exports.createTravel = async (req, res, next) => {
    try {
        // const { title, price, desc, categoryId, restauId } = req.body;
        const images = req.files.map((file) => {
          return file.path
        })
        const { id } = req.params;
        const travel = await Travel.findOne({
          _id: id,
        })

        // travel already exists
        if (travel) {
            res.status(409); // conflict error
            const error = new Error('travel already exists');
            return next(error);
        } 
           
        const newtravel = await Travel.create({
          title: req.body.title,
          desc: req.body.desc,
          price: req.body.price,
          images: images,
      }); 
        res.status(201).json(newtravel);
    } catch(error) {
        next(error);
    }
}

exports.updateTravel = async (req, res, next) => {
    const { id } = req.params;
    
  try {
    const travel = await Travel.findByIdAndUpdate(
      {
        _id: id,
      },

      { ...req.body },

      { new: true }
    );
    
    if (!travel) {
      return res.status(404).json({
        error: true,
        message: 'error to update the travel',
      });
    }
    res.status(200).json({
      error: false,
      message: 'travel has been updated successfully',
      data: travel,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
      data: null,
    });
  }
}

exports.removeTravelById = async (req, res) => {
    const { id } = req.params;
    try {
      const travel = await Travel.findByIdAndDelete(id);
      if (!travel) {
        return res.status(404).json({
          error: true,
          message: 'travel not found',
          data: null,
        });
      }
      res.status(200).json({
        error: false,
        message: 'travel deleted successfully',
        travel,
      });
    } catch (error) {
      res.status(500).json({
        error: false,
        message: error.message,
        data: null,
      });
    }
};

exports.getTravelById = async (req, res) => {
    const { id } = req.params;
    try {
      const travel = await Travel.findById(id);
      if (!travel) {
        return res.status(404).json({
          error: true,
          message: `Cannot find travel with this id ${id}`,
          data: null,
        });
      }
      res.status(200).json({
        error: false,
        message: null,
        data: travel,
      });
    } catch (error) {
      res.status(500).json({
        error: true,
        message: error.message,
        data: null,
      });
    }
};

exports.getAllTravels = async (req, res) => {
    try {
      const travels = await Travel.find()
      if (!travels) {
        return res.status(404).json({
          error: true,
          message: 'travels not found',
          data: null,
        });
      }
      res.status(200).json({
        error: false,
        message: 'travels retrieved successfully',
        data: travels,
      });
    } catch (error) {
      res.status(500).json({
        error: true,
        message: error.message,
        data: null,
      });
    }
};