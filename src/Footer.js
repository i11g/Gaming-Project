const Footer = () => {
    let today=new Date();
    return (
        <footer>
            <p>
                Copyright @copy; {today.getFullYear()}
            </p>
        </footer>
    )
}