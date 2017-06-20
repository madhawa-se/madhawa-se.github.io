package web.builder;

public class Sqare {

    private PointXY upPoint;
    private PointXY downPoint;

    public Sqare(PointXY upPoint, PointXY downPoint) {
        this.upPoint = upPoint;
        this.downPoint = downPoint;
    }
    

    /**
     * @return the upPoint
     */
    public PointXY getUpPoint() {
        return upPoint;
    }

    /**
     * @param upPoint the upPoint to set
     */
    public void setUpPoint(PointXY upPoint) {
        this.upPoint = upPoint;
    }

    /**
     * @return the downPoint
     */
    public PointXY getDownPoint() {
        return downPoint;
    }

    /**
     * @param downPoint the downPoint to set
     */
    public void setDownPoint(PointXY downPoint) {
        this.downPoint = downPoint;
    }
}
