import Star from "./Star";

export default function Stars({count}) {

    let stars = count;
    if (stars < 1 || stars > 5 || (typeof stars !== 'number')) {
        stars = false;
    }
    return (
        <div>
            {stars &&
                <ul className="card-body-stars u-clearfix">
                    <Star count={stars} />
                </ul>
            }
        </div>
    )
}

Stars.defaultProps = {count: 0}