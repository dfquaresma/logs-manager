require 'test_helper'

class MetricsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get metrics_show_url
    assert_response :success
  end

end
