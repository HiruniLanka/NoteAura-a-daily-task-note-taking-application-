package com.codeWithHiru.fullstack_backend.controller;

import com.codeWithHiru.fullstack_backend.exception.NoteNotFoundException;
import com.codeWithHiru.fullstack_backend.model.Note;
import com.codeWithHiru.fullstack_backend.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class NoteController {

    @Autowired
    private NoteRepository noteRepository;

    @PostMapping("/note")
    Note newNote(@RequestBody Note newNote){
        return noteRepository.save(newNote);
    }

    @GetMapping("/notes")
    List<Note> getAllNotes(){
        return noteRepository.findAll();
    }

    @GetMapping("/note/{id}")
    Note getNoteById(@PathVariable Long id){
        return noteRepository.findById(id)
                .orElseThrow(()->new NoteNotFoundException(id));
    }

    @PutMapping("/note/{id}")
    Note updateNote(@RequestBody Note newNote,@PathVariable Long id){
        return noteRepository.findById(id)
                .map(note -> {
                    note.setDate(newNote.getDate());
                    note.setTask(newNote.getTask());
                    note.setStatus(newNote.getStatus());
                    return noteRepository.save(note);
                }).orElseThrow(()->new NoteNotFoundException(id));
    }

    @DeleteMapping("/note/{id}")
    String deleteNote(@PathVariable Long id){
        if(!noteRepository.existsById(id)){
            throw new NoteNotFoundException(id);
        }
        noteRepository.deleteById(id);
        return "User with id "+id+ " has been deleted success.";
    }

}
