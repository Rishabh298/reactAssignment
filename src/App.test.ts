import axios from 'axios';
import { render } from '@testing-library/react';
import { fetchData, handleScroll } from './App'; // Import your functions

jest.mock('axios');

describe('fetchData', () => {
  it('should dispatch actions correctly when axios call succeeds', async () => {
    const mockData = { data: { data: [/* mock data */], total_pages: 2 } };
    axios.get.mockResolvedValueOnce({ data: mockData });

    const dispatch = jest.fn();
    const setPageNum = jest.fn();
    const setTotalPage = jest.fn();

    await fetchData(dispatch, setPageNum, setTotalPage);

    expect(dispatch).toHaveBeenCalledWith(setCardData(mockData.data.data));
    expect(setPageNum).toHaveBeenCalledWith(2);
    expect(setTotalPage).toHaveBeenCalledWith(2);
  });

  it('should log error when axios call fails', async () => {
    const errorMessage = 'Failed to fetch data';
    axios.get.mockRejectedValueOnce(new Error(errorMessage));

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    await fetchData();

    expect(consoleSpy).toHaveBeenCalledWith(expect.any(Error), 'ERROR>>>>>>');
  });
});

describe('handleScroll', () => {
  it('should call fetchData when scrolled to the bottom of the page', () => {
    Object.defineProperty(window, 'innerHeight', { value: 1000 });
    Object.defineProperty(document.documentElement, 'scrollHeight', { value: 2000 });
    Object.defineProperty(document.documentElement, 'scrollTop', { value: 1000 });

    const fetchDataMock = jest.fn();
    const pageNum = 1;
    const totalPage = 2;

    handleScroll(fetchDataMock, pageNum, totalPage);

    expect(fetchDataMock).toHaveBeenCalled();
  });

  it('should not call fetchData when not scrolled to the bottom of the page', () => {
    Object.defineProperty(window, 'innerHeight', { value: 1000 });
    Object.defineProperty(document.documentElement, 'scrollHeight', { value: 2000 });
    Object.defineProperty(document.documentElement, 'scrollTop', { value: 500 });

    const fetchDataMock = jest.fn();
    const pageNum = 1;
    const totalPage = 2;

    handleScroll(fetchDataMock, pageNum, totalPage);

    expect(fetchDataMock).not.toHaveBeenCalled();
  });
});