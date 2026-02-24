import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (e) {
        res.status(500).json({ error: "Internal Server Error", details: e.message });
    }
}

export async function getByID(req, res) {
    try {
      const { id } = req.params;
      const note = await Note.findById(id);
  
      if (!note) {
        return res.status(404).json({ message: `Note with ID ${id} not found` });
      }
  
      res.status(200).json(note);
    } catch (e) {
      res
        .status(500)
        .json({ error: "Internal Server Error", details: e.message });
    }
  }

export async function createNote(req, res) {
    try {
        const { title, content } = req.body;
        const newNote = new Note({ title: title, content: content });
        await newNote.save();
        res.status(201).json({ message: "Note created successfully", note: newNote });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", details: error.message });
    }
}

export async function updateNote(req, res) {
    try {
        const { title, content } = req.body;
        await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
        res.status(200).json({ message: `Note with ID ${req.params.id} updated successfully` });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", details: error.message });
    }
}

export async function deleteNote(req, res) {
    try {
        const deleteNote = await Note.findByIdAndDelete(req.params.id);
        if(!deleteNote){
            res.status(404).json({ message: `Note with ID ${req.params.id} not found` });
        }
        res.status(200).json({message: `Note with ID ${req.params.id} deleted successfully`});
    } catch (error) {
        es.status(500).json({ message: "Internal Server Error", details: error.message });
    }
}