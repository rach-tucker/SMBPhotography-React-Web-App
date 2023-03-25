import '../CSS_Files/footer.css'

const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer>{`Copyright © Soul Meets Body Photography ${year}`}</footer>;
  };
  
  export default Footer;