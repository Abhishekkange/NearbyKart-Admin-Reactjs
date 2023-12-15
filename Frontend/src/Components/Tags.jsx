import React, { useState } from 'react';
import { TextField, Chip, Grid, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Tags = () => {
    const [tagInput, setTagInput] = useState('');
    const [tags, setTags] = useState([]);

    const handleTagAdd = () => {
        if (tagInput.trim() !== '') {
            setTags([...tags, tagInput.trim()]);
            setTagInput('');
        }
    };

    const handleTagDelete = (tagToDelete) => {
        const updatedTags = tags.filter((tag) => tag !== tagToDelete);
        setTags(updatedTags);
    };

    return (
        <div className="p-4">
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={8}>
                    <TextField
                        fullWidth
                        label="Add Tags"
                        variant="outlined"
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleTagAdd()}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleTagAdd}
                    >
                        Add
                    </button>
                </Grid>
            </Grid>
            <div className="mt-4">
                {tags.map((tag, index) => (
                    <Chip
                        key={index}
                        label={tag}
                        onDelete={() => handleTagDelete(tag)}
                        deleteIcon={<IconButton><DeleteIcon /></IconButton>}
                        className="m-1"
                    />
                ))}
            </div>
        </div>
    );
};

export default Tags;
