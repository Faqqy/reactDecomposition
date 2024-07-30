import SearchButton from "./SearchButton";

export default function SearchForm () {

    function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // тут логика поиска
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="search" id="search"/>
            <SearchButton className="btnSearch" title='Найти' />
        </form>
    )
}