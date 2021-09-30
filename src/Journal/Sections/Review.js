import React, { useEffect, useState, useCallback } from "react";
import Title from "../../components/Title";
import JournalListItem from "../components/JournalListItem";
import JournalDataService from "../../services/journal";
import styled from "styled-components";

const StyledReview = styled.div`
  h3 {
    color: #656565;
    margin-top: 60px;
    text-decoration: underline;
  }
`;

const Review = () => {
  const [entries, setEntries] = useState([]);
  const [entryMetadata, setEntryMetadata] = useState({});
  const [reminderEntries, setReminderEntries] = useState([]);
  const [reminderEntryMetadata, setReminderEntryMetadata] = useState({});

  const getEntries = async () => {
    const entryRes = (
      await JournalDataService.getEntries({ type: "reminder", search: false })
    ).data;
    const { page, query, entries_per_page, total_results } = entryRes;
    setEntries(entryRes.entries);

    setEntryMetadata({ page, query, entries_per_page, total_results });
  };

  const getReminderEntries = async () => {
    const reminderEntryRes = (
      await JournalDataService.getEntries({ type: "reminder", search: true })
    ).data;
    const { page, query, entries_per_page, total_results } = reminderEntryRes;
    setReminderEntries(reminderEntryRes.entries);

    setReminderEntryMetadata({ page, query, entries_per_page, total_results });
  };

  useEffect(() => {
    getEntries();
    getReminderEntries();
  }, []);

  useEffect(() => {}, [entries]);

  return (
    <StyledReview>
      <div className="section">
        <Title title="Journal Entries" />
        {reminderEntryMetadata.query &&
        !parseInt(entryMetadata.total_results) ? (
          <div className="section">Nothing to show</div>
        ) : entries.length ? (
          <div className="">
            <div className="reminderEntries">
              <h3>Entries with Reminders</h3>
              {reminderEntries.map((entry) => {
                return (
                  <JournalListItem
                    key={entry._id}
                    path={`/journal/edit/${entry._id}`}
                    entry={entry}
                    className="reminder"
                  />
                );
              })}
            </div>
            <div className="allEntries">
              <h3>All Entries</h3>
              {entries.map((entry) => {
                return (
                  <JournalListItem
                    key={entry._id}
                    path={`/journal/edit/${entry._id}`}
                    entry={entry}
                  />
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </StyledReview>
  );
};

export default Review;
