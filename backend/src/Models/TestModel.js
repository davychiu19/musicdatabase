import mongoose from 'mongoose';

const DemoSchema = mongoose.Schema({
    TestColumn1: String,
    TestColumn2: String,
    TestColumn3: String
})

export default mongoose.model("DemoSchema", DemoSchema);