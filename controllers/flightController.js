const {exampleModel} = require("../models/Flight")

const {v4: uuid} = require("uuid")


//get all flights
exports.example = async (req, res) => {
    try {
        const flights = exampleModel;
        res.status(200).json({ message: "All available flights", flights})
        // console.log("example")
        // res.send("Flight example")
    } catch (error) {
        res.status(500).json({message: err.message})
    }
}

//Book a flight

exports.addFlight =  async (req, res) => {
    try {
        const {title, time, price, date} = await req.body;

       const newFlight = { 
        id: uuid(),
        title,
        time,
        price,
        date,
       };

       exampleModel.push(newFlight);

        res.status(201).json({
            message: "flight booked sucessfully",
        newFlight,
    });
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


//get a single flight
exports.singleFlight = async (req, res) =>{
    try {
        let id = req.params.id
        const flight = exampleModel.find((flight) => flight.id === id)
        res.status(201).json({message: "flight found",
    flight})  
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//Update/Edit flight

exports.updateFlight = async(req, res) => {
    try {
        let id = req.params.id
        const flight = exampleModel.find((flight) => flight.id === id)
        const {title, time, price, date} = await req.body;
        flight.title = title,
        flight.time = time,
        flight.price = price,
        flight.date = date,
        res.status(201).json({message: `flight with ID: ${id} has been updated successfully`,
    flight})
    } catch (error) {
        res.status(500).json({ message: error.message })   
    }
    
}

//delete a flight

exports.deleteFlight = async (req, res) => {
    try {
        let id = req.params.id
    const flight = exampleModel.find((flight) => flight.id === id)
    exampleModel.splice(exampleModel.indexOf(flight), 1)
    res.status(200).json({message: `flight with ID: ${id} has been deleted successfully`, 
    flight})
    } 
    catch (error) {
       res.status(500).json({message: error.message}) 
    }
}

