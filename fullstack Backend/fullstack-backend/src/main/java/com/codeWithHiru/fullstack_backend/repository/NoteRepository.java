package com.codeWithHiru.fullstack_backend.repository;

import com.codeWithHiru.fullstack_backend.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<Note,Long >{
}
