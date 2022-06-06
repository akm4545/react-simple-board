package com.react.board.boardApi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.react.board.boardApi.dao.BoardMapper;
import com.react.board.boardApi.vo.BoardVO;

@Service
public class BoardService {
	
	@Autowired
	BoardMapper boardDAO;

	public void insertBoard(BoardVO boardVO) {
		boardDAO.insertBoard(boardVO);
	}

	public List<BoardVO> selectBoardList() {
		return boardDAO.selectBoardList();
	}

	public BoardVO selectBoard(BoardVO boardVO) {
		return boardDAO.selectBoard(boardVO);
	}

	public void updateBoard(BoardVO boardVO) {
		boardDAO.updateBoard(boardVO);
	}

	public void deleteBoard(BoardVO boardVO) {
		boardDAO.deleteBoard(boardVO);		
	}
}
