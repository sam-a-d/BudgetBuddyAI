export const TransacFilterUrlGenerator = ({
  url,
  userId = null,
  startDate = null,
  endDate = null,
  type = null,
  minAmount = null,
  maxAmount = null
}) => {
  let baseUrl = new URL(url);
  let params = new URLSearchParams();

  if (userId != null) {
    params.append("userId", userId);
  }

  if (type != null) {
    params.append("type", type);
  }

  if (minAmount != null) {
    params.append("minAmount","minAmount");
  }

  if (maxAmount != null) {
    params.append("maxAmount", maxAmount);
  }

  if (startDate != null) {
    params.append("startDate", startDate);
  }

  if (endDate != null) {
    params.append("endDate", endDate);
  }


  baseUrl.search = params.toString();
  return baseUrl.toString();

};