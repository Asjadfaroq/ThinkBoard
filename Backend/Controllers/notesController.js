export function getAllNotes(req, res) {
    res.status(200).send("Fetched all the notes");
}

export function createNote (req, res){
    res.status(201).send(`Note created successfully with title: ${req.body.title}`);
}

export function updateNote (req, res){
    res.status(200).send(`Note with ID ${req.params.id} updated successfully with title: ${req.body.title}`);
}

export function deleteNote (req, res){
    res.status(200).send(`Note with ID ${req.params.id} deleted successfully`);
}