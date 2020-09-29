import { runInNewContext } from "vm";


const myFavouriteAuthors = {
    allAuthors: {
        fiction: [
            'Agatha Christie',
            'J. K. Rowling',
            'Dr. Seuss'
        ],
        scienceFiction: [
            'Neal Stephenson',
            'Arthur Clarke',
            'Isaac Asimov',
            'Robert Heinlein'
        ],
        fantasy: [
            'J. R. R. Tolkien',
            'J. K. Rowling',
            'Terry Pratchett'
        ],
    },
    [Symbol.iterator]() {
        const genres = Object.values(this.allAuthors); //will become an array of arrays
        let authorIdx = 0;
        let genreIdx = 0;
        return {
            next() {
                const authors = genres[genreIdx];
                const noMoreAuthors = !(authorIdx < authors.length);
                if (noMoreAuthors) {
                    genreIdx++;
                    authorIdx = 0;
                }
                const noMoreGenres = !(genreIdx < genres.length);
                if (noMoreGenres) {
                    return {
                        value: undefined,
                        done: true
                    }
                }
                return {
                    value: genres[genreIdx++][authorIdx++],
                    done: false
                }
            }
        }
    }
}