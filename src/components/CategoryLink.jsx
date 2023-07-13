import { Link, generatePath } from "react-router-dom";

export default function CategoryLink() {
    return (
        <Link
            to={generatePath("collections", { collectionId: 1 })}
            className="text-center"
        >
            <img src="image/season_coll_1_img.png" alt="Đầm thiết kế" />
            <h4>Đầm thiết kế</h4>
            <span className="d-block">14 sản phẩm</span>
        </Link>
    );
}
