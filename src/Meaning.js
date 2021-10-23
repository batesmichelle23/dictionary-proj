import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>
                        <section>
                        <div>
                            <div className="def">
                                <div className="speech">
                                {props.meaning.partOfSpeech}
                                </div>
                                <div className="definition">
                                {definition.definition}
                                </div>
                                <br />
                                <div className="example">
                                <em>{definition.example}</em>
                                </div>
                                </div>
                                <br />
                            <Synonyms synonyms={definition.synonyms} />
                        </div>
                        </section>
                    </div>
                );
            })}
        </div>
    );
}