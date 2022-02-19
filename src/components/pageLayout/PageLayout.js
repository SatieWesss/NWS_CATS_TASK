import React, { useEffect } from 'react';
import MenuBar from '../menuBar/MenuBar';
import Routing from '../routing';
import { fetchCategoriesAction } from '../../redux/categories/categoriesActions';
import { connect } from 'react-redux';
import './page-layout.css';

const PageLayout = ({fetchCategories, categoriesData}) => {
  
  useEffect(() => {
    fetchCategories()
  },[]);
  
  return (
    <div className='page-layout'>
      <MenuBar categoriesData={categoriesData}/>
      <div className="main-content">
        <Routing />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    categoriesData: state.categoriesData
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(fetchCategoriesAction())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PageLayout)