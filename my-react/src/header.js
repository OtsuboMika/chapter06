import React from 'react';
import classes from "../src/css/Header.module.css";

export const Header = () => {
    return (
        <header className={classes.header}>
          <a className={classes.headerLink} href='/'>Blog</a>
          <a className={classes.headerLink} href='/content'>お問い合わせ</a>
        </header>
    )
}