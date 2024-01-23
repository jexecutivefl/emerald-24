import React from 'react';
import PropTypes from 'prop-types';
import styles from './BlogCard.module.css'; // Import the styles using CSS Modules

const BlogCard = ({ title, date, commentsCount, categories, imageUrl, imageAlt, buttonText, paragraphs, url }) => {
    return (
        <div className={styles.blogCard}>
            <div className={styles.blogCardHeader}>
                <h2 className={styles.blogCardTitle}>{title}</h2>
                <p className={styles.blogCardDate}>{date} • {commentsCount} Comments</p>
                <div className={styles.blogCardCategories}>
                    {categories.map((category, index) => (
                        <span key={index} className={styles.blogCardCategory}>{category}</span>
                    ))}
                </div>
            </div>
            <div className={styles.blogCardBody}>
                <img src={imageUrl} alt={imageAlt} className={styles.blogCardImage} />
                <div>
                    <p className={styles.blogCardParagraph}>{paragraphs}</p>
                    <a href={url} className={styles.blogCardButton} rel="noopener noreferrer">
                        {buttonText}
                    </a>
                </div>
            </div>
        </div>
    );
};

BlogCard.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    commentsCount: PropTypes.number.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    paragraphs: PropTypes.string.isRequired,
};

export default BlogCard;
