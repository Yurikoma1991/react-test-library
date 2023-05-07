import Article from './Article';
import Author from './Author';
import Region from './Region';

Article.belongsTo(Author);
Author.hasMany(Article);

Article.belongsToMany(Region, { through: 'articles_regions'});
Region.belongsToMany(Article, { through: 'articles_regions'});
// Article.belongsToMany(Author, { through: 'articles_authors'});
// Author.belongsToMany(Article, { through: 'articles_authors'});

Article.belongsTo(Author, {
    onDelete: 'CASCADE',
    foreignKey: { allowNull: true }
})
Author.hasMany(Article)

// Article.hasOne(Author, {
//     foreignKey: {
//       allowNull: false
//     }
//   });

export default {
    Article,
    Author,
    Region
};
