// FlexContainer.jsx
import React from 'react';
import styles from './FlexBox.module.css';

function FlexBox({
                           direction = 'row',      // default: row
                           wrap = 'nowrap',        // default: nowrap
                           justifyContent = 'flex-start',  // default: flex-start
                           alignItems = 'flex-start',      // default: flex-start
                           rowGap= 'row-gap',
                           columnGap = 'column-gap',
                           gap = 'gap',
                           children,
                           ...otherProps
                       }) {
    const style = {
        flexDirection: direction,
        flexWrap: wrap,
        justifyContent: justifyContent,
        alignItems: alignItems,
        rowGap: rowGap,
        columnGap: columnGap,
        gap: gap
    };

    return (
        <div style={style} className={styles.container} {...otherProps}>
            {children}
        </div>
    );
}

export default FlexBox;
