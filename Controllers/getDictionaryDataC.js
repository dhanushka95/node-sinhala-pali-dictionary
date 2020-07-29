const StatusCodes = require('../common/statusCode');
const FilterType = require('../common/filterType');
const Joi = require('@hapi/joi');
const db = require('../MysqlDB/config');
exports.validateDictionaryGet = (req, res, next) => {
    try {
        const schema = Joi.object({
            typeId: Joi.number().required(),
            search: Joi.string().required()
        });
        const {error} = schema.validate(req.body);
        if (error && error.details) {
            return res.status(200).json({
                statusCode: StatusCodes.ValidationError,
                message: error.details[0].message,
                data: null
            });
        } else {
            next();
        }
    } catch (err) {
        res.status(200).json({
            data: null,
            message: 'Dictionary Get Validation Error',
            statusCode: StatusCodes.ValidationError
        });
    }
};
exports.dictionaryDataGet = async (req, res) => {
    try {
        let rows = [];
        if (FilterType.SinhalaToPali === req.body.typeId) {
            rows =  await db.query(
                `SELECT * FROM dhanushkatable WHERE field1 LIKE '%${req.body.search}%' AND field5='s' GROUP BY field2`,
                { type: db.QueryTypes.SELECT }
            );
            if(rows.length === 0){
                rows =  await db.query(
                    `SELECT * FROM dhanushkatable WHERE field2 LIKE '%${req.body.search}%' AND field5='s' GROUP BY field2`,
                    { type: db.QueryTypes.SELECT }
                );
            }
            res.status(200).json({
                data: rows,
                message: 'Dictionary Get Success!',
                statusCode: StatusCodes.Success
            });
        } else if (FilterType.PaliToSinhala === req.body.typeId) {
            rows =  await db.query(
                `SELECT * FROM dhanushkatable WHERE field1 LIKE '%${req.body.search}%' AND field5='p' GROUP BY field2`,
                { type: db.QueryTypes.SELECT }
            );
            if(rows.length === 0){
                rows =  await db.query(
                    `SELECT * FROM dhanushkatable WHERE field2 LIKE '%${req.body.search}%' AND field5='p' GROUP BY field2`,
                    { type: db.QueryTypes.SELECT }
                );
            }
            res.status(200).json({
                data: rows,
                message: 'Dictionary Get Success!',
                statusCode: StatusCodes.Success
            });
        }
    } catch (e) {
        console.log(e);
        res.status(200).json({
            data: null,
            message: 'Dictionary Get DB Error',
            statusCode: StatusCodes.DBError
        });
    }
};
