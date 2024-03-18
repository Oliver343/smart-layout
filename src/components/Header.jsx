import ButtonCollapse from './ButtonCollapse';
import './ComponentStyles.css';

export default function Header() {
    return (
        <div className='header header-expanded'>
            HEADER
            <ButtonCollapse />
        </div>
    )
}