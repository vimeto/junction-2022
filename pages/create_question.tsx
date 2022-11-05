import type { NextPage } from 'next'
import React, { useState } from 'react';
import ActivityComponent from '../components/createQuestion/Activity';
import RarityComponent from '../components/createQuestion/Rarity';
import FeedbackType from '../components/createQuestion/FeedbackType';

const CreateQuestion: NextPage = () => {
  const [activity, setActivity] = useState<number>();
  const [rarity, setRarity] = useState<number>();
  const [feedbackType, setFeedbackType] = useState("");
  const [translations, setTranslations] = useState({
    en: {
      title: "",
      description: "",
      inputTitle: "",
      imageButton: "",
      submit: "",
      enumValues: {} as Record<number, string>,
    },
    fi: {
      title: "",
      description: "",
      inputTitle: "",
      imageButton: "",
      submit: "",
      enumValues: {} as Record<number, string>,
    },
  });

  const onActivityChange: React.ChangeEventHandler<HTMLInputElement> = (event) => { setActivity(Number(event.target.value)); }

  const onRarityChange: React.ChangeEventHandler<HTMLInputElement> = (event) => { setRarity(Number(event.target.value)); }

  const onFeedBackTypeChange: React.ChangeEventHandler<HTMLInputElement> = (event) => { setFeedbackType(event.target.value); }

  const onTranslationsChange = (event: React.ChangeEvent<HTMLInputElement>, locale: "en" | "fi", key: keyof typeof translations.en) => {
    const newvalue = event.target.value;

    setTranslations({ ...translations, [locale]: { ...(translations[locale]), [key]: newvalue  } })
  }

  const onTranslationsEnum = (event: React.ChangeEvent<HTMLInputElement>, locale: "en" | "fi", enumIndex: number) => {
    const newvalue = event.target.value;

    const oldEnums = translations[locale].enumValues;
    const newEnums = { ...oldEnums, enumIndex: newvalue }

    setTranslations({ ...translations, [locale]: { ...(translations[locale]), enumValues: newEnums  } })
  }

  return (
    <div>
      <h1>Here we create our questions</h1>
      <form>
        <div className='text-center mt-5'>
          <input
            placeholder='Name'
            type="text"
          />
        </div>
        <ActivityComponent activity={activity} onActivityChange={onActivityChange} />
        <RarityComponent rarity={rarity} onRarityChange={onRarityChange} />
        <FeedbackType feedbackType={feedbackType} onFeedBackTypeChange={onFeedBackTypeChange} />
        <p className='text-lg ml-2 mt-2'>EN</p>
        <input
          className='block my-2 p-1 ml-2'
          placeholder='title'
          value={translations.en.title}
          onChange={(event) => onTranslationsChange(event, "en", "title")}
          />
        <input
          className='block my-2 p-1 ml-2'
          placeholder='description'
          value={translations.en.description}
          onChange={(event) => onTranslationsChange(event, "en", "description")}
          />
        <input
          className='block my-2 p-1 ml-2'
          placeholder='inputTitle'
          value={translations.en.inputTitle}
          onChange={(event) => onTranslationsChange(event, "en", "inputTitle")}
          />
        <input
          className='block my-2 p-1 ml-2'
          placeholder='imageButton'
          value={translations.en.imageButton}
          onChange={(event) => onTranslationsChange(event, "en", "imageButton")}
          />
        <input
          className='block my-2 p-1 ml-2'
          placeholder='submit'
          value={translations.en.submit}
          onChange={(event) => onTranslationsChange(event, "en", "submit")}
          />
        <p className='text-lg ml-2 mt-2'>ENUM values</p>
        <input
          className='block my-2 p-1 ml-2'
          placeholder='Enum key 1'
          value={translations.en.enumValues[1]}
          onChange={(event) => onTranslationsEnum(event, "en", 1)}
          />
        <input
          className='block my-2 p-1 ml-2'
          placeholder='Enum key 2'
          value={translations.en.enumValues[2]}
          onChange={(event) => onTranslationsEnum(event, "en", 2)}
          />
        <input
          className='block my-2 p-1 ml-2'
          placeholder='Enum key 3'
          value={translations.en.enumValues[3]}
          onChange={(event) => onTranslationsEnum(event, "en", 3)}
          />

        <p className='text-lg ml-2 mt-2'>FI</p>
        <input
          className='block my-2 p-1 ml-2'
          placeholder='title'
          value={translations.fi.title}
          onChange={(event) => onTranslationsChange(event, "fi", "title")}
          />
        <input
          className='block my-2 p-1 ml-2'
          placeholder='description'
          value={translations.fi.description}
          onChange={(event) => onTranslationsChange(event, "fi", "description")}
          />
        <input
          className='block my-2 p-1 ml-2'
          placeholder='inputTitle'
          value={translations.fi.inputTitle}
          onChange={(event) => onTranslationsChange(event, "fi", "inputTitle")}
          />
        <input
          className='block my-2 p-1 ml-2'
          placeholder='imageButton'
          value={translations.fi.imageButton}
          onChange={(event) => onTranslationsChange(event, "fi", "imageButton")}
          />
        <input
          className='block my-2 p-1 ml-2'
          placeholder='submit'
          value={translations.fi.submit}
          onChange={(event) => onTranslationsChange(event, "fi", "submit")}
          />
        <p className='text-lg ml-2 mt-2'>ENUM values</p>
        <input
          className='block my-2 p-1 ml-2'
          placeholder='Enum key 1'
          value={translations.fi.enumValues[1]}
          onChange={(event) => onTranslationsEnum(event, "fi", 1)}
          />
        <input
          className='block my-2 p-1 ml-2'
          placeholder='Enum key 2'
          value={translations.fi.enumValues[2]}
          onChange={(event) => onTranslationsEnum(event, "fi", 2)}
          />
        <input
          className='block my-2 p-1 ml-2'
          placeholder='Enum key 3'
          value={translations.fi.enumValues[3]}
          onChange={(event) => onTranslationsEnum(event, "fi", 3)}
          />
        {/* <div>
          <p>Rarity level</p>
          <div>
            <label>
              <input
                type="radio"
                value={0}
                checked={rarity === 0}
                onChange={onRarityChange}
              />
              Common
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value={10}
                checked={rarity === 10}
                onChange={onRarityChange}
              />
              Rare
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value={20}
                checked={rarity === 20}
                onChange={onRarityChange}
              />
              Epic
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value={30}
                checked={rarity === 30}
                onChange={onRarityChange}
              />
              Ultra rare
            </label>
          </div>
          <div>Selected option is : {rarity}</div>
        </div> */}
        {/* <div>
          <p>Feedback type</p>
          <div>
            <label>
              <input
                type="radio"
                value={"freeText"}
                checked={feedbackType === "freeText"}
                onChange={onFeedBackTypeChange}
              />
              Free text
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value={"freeTextWithImage"}
                checked={feedbackType === "freeTextWithImage"}
                onChange={onFeedBackTypeChange}
              />
              Free text with picture
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value={"multipleChoice"}
                checked={feedbackType === "multipleChoice"}
                onChange={onFeedBackTypeChange}
              />
              Multiple choice
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value={"markCompleted"}
                checked={feedbackType === "markCompleted"}
                onChange={onFeedBackTypeChange}
              />
              Mark Completed
            </label>
          </div>
          <div>Selected option is : {feedbackType}</div>
        </div> */}
      </form>
    </div>
  )
}

export default CreateQuestion
