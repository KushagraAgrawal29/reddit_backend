import Category from "../models/Category.js";
import Subreddit from "../models/Community.js";

export let Categories = [
    "Sports",
    "Gaming",
    "News",
    "TV",
    "Aww",
    "Memes",
    "Pics & Gifs",
    "Travel",
    "Tech",
    "Music",
    "Art & Design",
    "Beauty",
    "Books & Writing",
    "Crypto",
    "Discussion",
    "E3",
    "Fashion",
    "Finance & Business",
    "Food",
    "Health & Fitness",
    "Learning",
    "Mindblowing",
    "Outdoors",
    "parenting",
    "Photography",
    "Relationships",
    "Science",
    "Videos",
    "Vroom",
    "Wholesome",
];


/**
 * This function is used to insert a set of given categories to the database
 * if they do not already exist. The category consists of an id, name and
 * an index for randomization later on.
 *
 * @returns {void}
 */

// The purpose of this function is to check if the "Category" collection is empty. If it is, the function inserts documents into the collection based on the elements of the Categories array.
export async function insertCategoriesIfNotExists() {
    const count = Category.countDocuments();
    if(count === 0){
        for(let i=0;i < Categories.length;i++){
            await new Category({
                name: Categories[i],
                randomIndex: i,
            }).save();
        };
    };
};

/**
 * This function gets all the categories stored in the database and
 * sorts them ascendingly with the random index. Each category object is
 * then transformed into just an id and the name displayed to be returned.
 *
 * @returns {Array} Array of category objects consisting of id and name
 */

export async function getSortedCategories() {
    const categories = await Category.find({})?.sort({
        randomIndex: 1,
    });
    return categories.map((category) => {
        return {
            id: category.id,
            name: category.name,
        };
    });
};

/**
 * This function is used to get two random categories from the array of
 * Categories we have in read-it. It returns an empty object in case there are
 * no subreddits stored or that the count of total visited categories is zero.
 * A visited category is one which has subreddits made out from it. If there is only
 * one visited category then the first and second categories returned are the same.
 *
 * @returns {object} Object containing the two random categories together as strings
 */

export async function getTwoRandomCategories(){
    const len = Categories.length;
    let firstIndex,secondIndex,visited;

    if((await Subreddit.countDocuments({ deletedAt: null})) === 0){
        return {};
    };

    const categoryCount = await Category.countDocuments({ visited: true });
    if(categoryCount === 0){
        return {};
    }
    do{
        firstIndex = Math.floor(Math.random()*len);
        visited = await Category.findOne({ randomIndex: firstIndex }).select(
            "visited"
        );
    } while (!visited["visited"]);
    if(categoryCount >= 2){
        do{
            secondIndex = Math.floor(Math.random() * len);
            visited = await Category.find({ randomIndex: secondIndex }).select(
                "visited"
            );
        } while (firstIndex === secondIndex || !visited["visited"]);
    }
    else {
        secondIndex = firstIndex;
    }

    return {
        firstCategory: Categories[firstIndex],
        secondCategory: Categories[secondIndex],
    };
}

//TODO - Function left

