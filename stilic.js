// stilic.js
const style = document.createElement('style');
style.textContent = `
  body {
    margin: 0;
    font-family: sans-serif;
    background-color: #1e1e1e;
    color: white;
    display: flex;
    flex-wrap: wrap;
  }
  .sidebar {
    width: 100%;
    max-width: 300px;
    background-color: #2e2e2e;
    padding: 20px;
    box-sizing: border-box;
    flex-shrink: 0;
    transition: transform 0.3s ease;
    align-self: flex-start;
  }
  .season-button {
    background-color: #ff4d4d;
    color: #f1f1f1;
    padding: 15px;
    margin-bottom: 10px;
    border: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
    font-weight: bold;
  }
  .content {
    flex: 1;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .episode-number {
    color: purple;
    font-weight: bold;
    display: inline;
  }
  .episode {
    background-color: #2b2b2b;
    width: 100%;
    max-width: 295px;
    flex: 1 1 calc(33.333% - 20px);
    padding: 10px;
    box-sizing: border-box;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .episode img {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: 4px;
    display: block;
    margin: 0 auto;
    cursor: pointer;
  }
  .episode-description {
    font-style: italic;
    text-align: center;
    color: #cccccc;
    margin: 0 0 5px 0;
  }
  .episode-date {
    font-weight: bold;
    text-align: center;
    margin: 0;
    line-height: 1.2;
  }
  .episode-tags {
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 6px;
  }
  .episode-title {
    color: #4da6ff;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    margin-top: 8px;
  }
  .tag {
    display: inline-block;
    background-color: #4da6ff;
    color: white;
    border-radius: 20px;
    padding: 5px 12px;
    margin: 5px 4px 0 0;
    font-size: 12px;
    cursor: pointer;
    transition: background-color 0.2s;
    text-decoration: none;
  }
  .tag:hover {
    background-color: #1e90ff;
  }
  .tooltip-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-align: center;
    margin: 0;
    flex-shrink: 0;
  }
  .tooltip-icon {
    font-size: 20px;
    color: #fff;
    background-color: #8B4513;
    padding: 10px 20px;
    border-radius: 5px;
    border: 2px solid #6A4E23;
    font-weight: bold;
    margin-right: 8px;
    vertical-align: middle;
  }
  .tooltip-icon-text {
    font-size: 14px;
  }
  .tooltip-and-tags {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 6px;
    row-gap: 0;
    margin-top: 0;
    gap: 6px;
  }
  .tooltip-text {
    font-size: 16px;
    font-weight: bold;
    color: #b87333;
    padding: 10px 20px;
    background-color: #dcdcdc;
    border: 2px solid #b87333;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
    width: auto;
    margin: 0 auto;
    text-align: center;
    display: inline-block;
    line-height: 1.1;
  }
  .tooltip-text:hover {
    background-color: #c4c4c4;
  }
  .tooltip-balloon {
    visibility: hidden;
    background-color: #b87333;
    color: #dcdcdc;
    text-align: center;
    padding: 10px 20px;
    border-radius: 10px;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s;
    font-size: 14px;
    width: 200px;
    border: 2px solid #dcdcdc;
  }
  .tooltip-container:active .tooltip-balloon,
  .tooltip-container:hover .tooltip-balloon {
    visibility: visible;
    opacity: 1;
  }
  .search-container {
    margin-bottom: 20px;
    text-align: center;
  }
  .search-input {
    padding: 10px;
    font-size: 16px;
    width: 80%;
    max-width: 400px;
    border: none;
    border-radius: 8px;
    background-color: #444;
    color: white;
  }
  @media (max-width: 768px) {
    .episode {
      flex: 1 1 calc(50% - 20px);
    }
  }
  @media (max-width: 480px) {
    .episode {
      flex: 1 1 100%;
    }
    .sidebar {
      width: 100%;
    }
    .content {
      padding: 10px;
    }
  }
  .video-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  .video-overlay iframe {
    width: 80%;
    height: 80%;
  }
  .video-overlay .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 30px;
    color: white;
    cursor: pointer;
  }
`;
document.head.appendChild(style);
