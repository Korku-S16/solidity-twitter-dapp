// // const Tweets = ({ tweets, shortAddress }) => {
// //   return (
// //     <div id="tweetsContainer">
// //       {tweets.map((tweet, index) => (
// //         <div key={index} className="tweet">
// //           <img
// //             className="user-icon"
// //             src={`https://avatars.dicebear.com/api/human/${tweet.author}.svg`}
// //             alt="User Icon"
// //           />
// //           <div className="tweet-inner">
// //             <div className="author">{shortAddress(tweet.author)}</div>
// //             <div className="content">{tweet.content}</div>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Tweets;
// const Tweets = ({ tweets, shortAddress, contract, account, getTweets }) => {
//   async function handleLike(author, id) {
//     try {
//       await contract.methods.likeTweet(author, id).send({ from: account });
//       getTweets(); // refresh tweets after like
//     } catch (error) {
//       console.error("Error liking tweet:", error);
//     }
//   }

//   async function handleUnlike(author, id) {
//     try {
//       await contract.methods.unlikeTweet(author, id).send({ from: account });
//       getTweets(); // refresh tweets after unlike
//     } catch (error) {
//       console.error("Error unliking tweet:", error);
//     }
//   }

//   return (
//     <div id="tweetsContainer">
//       {tweets.map((tweet, index) => (
//         <div key={index} className="tweet">
//           <img
//             className="user-icon"
//             src={`https://robohash.org/${encodeURIComponent(tweet.author)}.png`}
//             alt="User Icon"
//           />
//           <div className="tweet-inner">
//             <div className="author">{shortAddress(tweet.author)}</div>
//             <div className="content">{tweet.content}</div>
//             <div className="likes">
//               <button onClick={() => handleLike(tweet.author, tweet.id)}>
//                 👍 Like ({tweet.likes})
//               </button>
//               <button
//                 onClick={() => handleUnlike(tweet.author, tweet.id)}
//                 style={{ marginLeft: "10px" }}
//               >
//                 👎 Unlike
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Tweets;

const Tweets = ({ tweets, shortAddress, contract, account, getTweets }) => {
  async function handleLike(author, id) {
    try {
      await contract.methods.likeTweet(author, id).send({ from: account });
      getTweets();
    } catch (error) {
      console.error("Error liking tweet:", error);
    }
  }

  async function handleUnlike(author, id) {
    try {
      await contract.methods.unlikeTweet(author, id).send({ from: account });
      getTweets();
    } catch (error) {
      console.error("Error unliking tweet:", error);
    }
  }

  return (
    <div id="tweetsContainer">
      {tweets.map((tweet, index) => (
        <div key={index} className="tweet">
          <img
            className="user-icon"
            src={`https://robohash.org/${encodeURIComponent(tweet.author)}.png`}
            alt="User Icon"
          />
          <div className="tweet-inner">
            <div className="author">{shortAddress(tweet.author)}</div>
            <div className="content">{tweet.content}</div>
            <div className="likes">
              <button
                className="like-btn"
                onClick={() => handleLike(tweet.author, tweet.id)}
              >
                ❤️ {tweet.likes}
              </button>
              <button
                className="unlike-btn"
                onClick={() => handleUnlike(tweet.author, tweet.id)}
              >
                💔
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tweets;
