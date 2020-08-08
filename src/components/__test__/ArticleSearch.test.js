import React from 'react';
import ReactDOM from 'react-dom';
import ArticleSearch from '../ArticleSearch';
import { render, cleanup, waitForElement } from '@testing-library/react';
import axiosMock from 'axios';

afterEach(cleanup);

it("fetches and displays data",async ()=>{
//Have to write the test for hooks which i am exploring the way
})