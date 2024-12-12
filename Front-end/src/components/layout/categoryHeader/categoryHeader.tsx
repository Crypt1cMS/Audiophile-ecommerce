import './categoryHeader.css';
import '../../../global.css';

interface CategoryProps {
    category: string;
}

function CategoryHeader({ category }: CategoryProps): JSX.Element {
    return (
        <>
            <section className="category-header-container">
                <div className="category-header-wrapper">
                    <h3>{category}</h3>
                </div>
            </section>
        </>
    );
}

export default CategoryHeader;
