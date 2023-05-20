function Header() {
    return (
        <header className="flex justify-center mt-6 mb-6">
            <div className="flex-1">
            <img className="w-[40px]" src="src\assets\dictionary-svgrepo-com.svg" alt=""/>
            </div>
            <div className="flex-2 border-r-2 pr-4">
                <span>Fuente</span>
            </div>
            <div className="flex-2 pl-4">
                <span>Tema</span>
            </div>
        </header>
    );
}

export default Header;