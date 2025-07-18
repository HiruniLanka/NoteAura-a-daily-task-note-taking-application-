package com.codeWithHiru.fullstack_backend.exception;

public class NoteNotFoundException extends RuntimeException{
    public NoteNotFoundException(Long no){
        super("Could not found the note with no. "+no);
    }
}
