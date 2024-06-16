import React from 'react'
import { faBarsProgress, faFileSignature } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ListFeature from './ListFeature';

import BookImage from '../img/Home_Book_img.jpg';

import "../style/Home.css";

export default function Home() {
    return (
        <div className="main_container">

            <div className="home_container">
                <div className="home_container_left">
                    <img src={BookImage} alt="Book" className="home_showcase_img" width={300} />
                </div>

                <div className="home_container_right">
                    <h2>Хүссэн номоо оруулаад үгээ цээжил</h2>
                    <ul className="features_list">
                        <ListFeature caption="Явцаа хянах" icon={faBarsProgress} size="xl" />
                        <ListFeature caption="Үгээ цээжлэх" icon={faFileSignature} size="xl" />
                        <ListFeature caption="Шалгалт өгөх" icon={faStar} size="xl" />
                        <ListFeature caption="Номын тэмдэглэл хөтлөх" icon={faPen} size="xl" />
                        <ListFeature caption="Англи, Монгол орчуулга" icon={faLanguage} size="xl" />
                    </ul>
                </div>

            </div>
            <div className="features_boxes">
                <div className="feature_box" id="feature_progress">

                </div>
                <div className="feature_box" id="feature_memorize_words">

                </div>
                <div className="feature_box" id="feature_quiz">

                </div>
                <div className="feature_box" id="feature_book_note">

                </div>
                <div className="feature_box" id="feature_translation">

                </div>
            </div>
        </div>
    )
}