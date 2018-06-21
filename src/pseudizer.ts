export default function tranformStringToPseudo(before: string): string {
    return before.split('').map(char => transformCharToPseudo(char)).join('');
}

function transformCharToPseudo (char: string): string {
    switch (char) {
        case 'a': return 'á'; break;
        case 'b': return 'β'; break;
        case 'c': return 'ç'; break;
        case 'd': return 'δ'; break;
        case 'e': return 'è'; break;
        case 'f': return 'ƒ'; break;
        case 'g': return 'ϱ'; break;
        case 'h': return 'λ'; break;
        case 'i': return 'ï'; break;
        case 'j': return 'J'; break;
        case 'k': return 'ƙ'; break;
        case 'l': return 'ℓ'; break;
        case 'm': return '₥'; break;
        case 'n': return 'ñ'; break;
        case 'o': return 'ô'; break;
        case 'p': return 'ƥ'; break;
        case 'q': return '9'; break;
        case 'r': return 'ř'; break;
        case 's': return 'ƨ'; break;
        case 't': return 'ƭ'; break;
        case 'u': return 'ú'; break;
        case 'v': return 'Ʋ'; break;
        case 'w': return 'ω'; break;
        case 'x': return 'ж'; break;
        case 'y': return '¥'; break;
        case 'z': return 'ƺ'; break;
        case 'A': return 'Â'; break;
        case 'B': return 'ß'; break;
        case 'C': return 'Ç'; break;
        case 'D': return 'Ð'; break;
        case 'E': return 'É'; break;
        case 'F': return 'F'; break;
        case 'G': return 'G'; break;
        case 'H': return 'H'; break;
        case 'I': return 'Ì'; break;
        case 'J': return 'J'; break;
        case 'K': return 'K'; break;
        case 'L': return '£'; break;
        case 'M': return 'M'; break;
        case 'N': return 'N'; break;
        case 'O': return 'Ó'; break;
        case 'P': return 'Þ'; break;
        case 'Q': return 'Q'; break;
        case 'R': return 'R'; break;
        case 'S': return '§'; break;
        case 'T': return 'T'; break;
        case 'U': return 'Û'; break;
        case 'V': return 'V'; break;
        case 'W': return 'W'; break;
        case 'X': return 'X'; break;
        case 'Y': return 'Ý'; break;
        case 'Z': return 'Z'; break;
        default: return char; break;
    }
}
