import style from './Footer.module.css';

function Footer() {
    return (
      <p className={style.main}>
        {"< "}Developed by{" "}
        <a href="https://github.com/matiascalvar">Matias Calvar</a>
        {" />"}
      </p>
    );
}

export default Footer;