module.exports = (sequlize, DataTypes) => {
    return sequlize.define(
        "Borad",
        {
            id: {
                type: DataTypes, INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            content:{
                type: DataTypes.TEXT,
                allowNull: false,
            },
            image_url:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            is_secret:{
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            like_num: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            comment_num:{
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            is_hot:{
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
        },

        {timestamps: true, underscored: true}
    );
};