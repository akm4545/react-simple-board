package com.react.board.boardApi.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.react.board.boardApi.service.BoardService;
import com.react.board.boardApi.vo.BoardVO;

@RestController
@RequestMapping("api/board")
public class BoardController {
	
	@Autowired
	BoardService boardService;
	
	@CrossOrigin("http://localhost:3000")
	@GetMapping("/")
	public Map<String, Object> boardList () {
		Map<String, Object> responsMap = new HashMap<String, Object>();
		
		try {
			List<BoardVO> boardList = boardService.selectBoardList();
			
			responsMap.put("board", boardList);
			responsMap.put("code", "200");
		}catch (Exception e) {
			e.printStackTrace();
			
			responsMap.put("code", "405");
		}
		
		return responsMap;
	};
	
	@CrossOrigin("http://localhost:3000")
	@GetMapping("/{idx}")
	public Map<String, Object> selectBoard(BoardVO boardVO) {
		Map<String, Object> responsMap = new HashMap<String, Object>();
		
		try {
			boardVO = boardService.selectBoard(boardVO);
			
			responsMap.put("code", "200");
			responsMap.put("board", boardVO);
		}catch (Exception e) {
			e.printStackTrace();
			
			responsMap.put("code", "405");
		}
		
		return responsMap;
	};
	
	@CrossOrigin("http://localhost:3000")
	@PostMapping("/")
	public Map<String, Object> insertBoard(@RequestBody BoardVO boardVO) {
		Map<String, Object> responsMap = new HashMap<String, Object>();
 		
		try {
			boardService.insertBoard(boardVO);
			
			responsMap.put("board", boardVO);
			responsMap.put("code", "200");
		}catch (Exception e) {
			e.printStackTrace();
			
			responsMap.put("code", "405");
		}
		
		return responsMap;
	};
	
	@CrossOrigin("http://localhost:3000")
	@PutMapping("/{idx}")
	public Map<String, Object> updateBoard(@RequestBody BoardVO boardVO, @PathVariable int idx) {
		Map<String, Object> responseMap = new HashMap<String, Object>();
		
		try {
			boardVO.setIdx(idx);
			
			boardService.updateBoard(boardVO);
			
			responseMap.put("code", "200");
			responseMap.put("board", boardVO);
		}catch (Exception e) {
			e.printStackTrace();
			
			responseMap.put("code", "405");
		}
		
		return responseMap;
	};
	
	@CrossOrigin("http://localhost:3000")
	@DeleteMapping("/{idx}")
	public Map<String, Object> deleteBoard(BoardVO boardVO) throws Exception {
		Map<String, Object> responseMap = new HashMap<String, Object>();
		
		try {
			boardService.deleteBoard(boardVO);
			
			responseMap.put("code", "200");
		}catch (Exception e) {
			e.printStackTrace();
			
			responseMap.put("code", "405");
		}
		
		return responseMap; 
	};
}

