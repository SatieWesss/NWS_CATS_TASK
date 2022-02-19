import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCats, loadMoreCats } from '../../redux/cats/catActions';
import './cats.css';

function Cats({ catsByCategories, fetchCatsByCategory, loadMoreCats }) {
    const { id } = useParams();
    const { cats, loading, error, loadMoreLoading, loadMoreError, notFound } = catsByCategories;

    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchCatsByCategory(id)
        setPage(1)
    }, [id])

    const onLoadMore = () => {
        loadMoreCats(page + 1)
        setPage(page => page + 1)
    };

    return (
        <div className="cats-container">
            {
                loading ?
                    <p className="loading">loading...</p>
                    :
                    error ?
                        <p className="error">
                            Sorry, something went wrong. Please try again later
                        </p>
                        :
                        <div>
                            {
                                notFound ?
                                    <div cla>
                                        <h4>Category not found</h4>
                                    </div>
                                    :
                                    <>
                                        <div className="posts-container">
                                            {cats && cats.map(cat => (
                                                <img src={cat.url} key={cat.id} />
                                            ))}
                                        </div>

                                        {loadMoreLoading ?
                                            <p className="loading">loading..</p>
                                            :
                                            loadMoreError ?
                                                <p>
                                                    There are no more posts available
                                                </p>
                                                :
                                                <button
                                                    className="load-more-button"
                                                    onClick={onLoadMore}
                                                >
                                                    Load more
                                                </button>
                                        }
                                    </>
                            }
                        </div>
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        catsByCategories: state.catsData
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCatsByCategory: (id) => dispatch(fetchCats(id)),
        loadMoreCats: (page) => dispatch(loadMoreCats(page))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cats);