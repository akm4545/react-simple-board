package com.react.board.boardApi.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.react.board.boardApi.vo.BoardVO;

@Mapper
public interface BoardMapper {

	int insertBoard(BoardVO boardVO);

	List<BoardVO> selectBoardList();

	BoardVO selectBoard(BoardVO boardVO);

	int updateBoard(BoardVO boardVO);

	void deleteBoard(BoardVO boardVO);

}
